"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  // Load session
  useEffect(() => {
    let isMounted = true;
    const forceReady = setTimeout(() => {
      if (isMounted && loading) {
        console.warn("AuthContext: forcing ready after timeout");
        setLoading(false);
        setReady(true);
      }
    }, 3000);
    const fetchProfile = async (sessionUser) => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, role, email")
          .eq("id", sessionUser.id)
          .single();

        if (error) throw error;
        return data || null;
      } catch (err) {
        console.error("AuthContext profile load error:", err);
        return null;
      }
    };

    const load = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const sessionUser = data?.session?.user || null;
        if (!isMounted) return;

        setUser(sessionUser);

        if (sessionUser) {
          const profileData = await fetchProfile(sessionUser);
          if (!isMounted) return;
          setProfile(profileData);
        } else {
          setProfile(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("AuthContext session load error:", err);
          setUser(null);
          setProfile(null);
        }
      } finally {
        if (isMounted) setLoading(false);
        if (isMounted) setReady(true);
      }
    };

    load();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const sessionUser = session?.user || null;
        setUser(sessionUser);

        if (sessionUser) {
          const profileData = await fetchProfile(sessionUser);
          setProfile(profileData);
        } else {
          setProfile(null);
        }
        setReady(true);
      }
    );

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
      clearTimeout(forceReady);
    };
  }, []);

  // Keep session persisted; no forced sign-out on unload.

  return (
    <AuthContext.Provider value={{ user, profile, loading, ready }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
