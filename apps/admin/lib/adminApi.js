import { supabase } from "./supabase";

// Fetch ALL users
export async function getAllUsers() {
    try {
        const { data, error } = await supabase
            .from("profiles")
            .select(`
          id,
          username,
          email,
          role,
          is_banned,
          is_paused,
          created_at
        `)
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data;
    } catch (err) {
        console.error("getAllUsers error:", err?.message ?? err);
        throw err;
    }
}

// Write moderation logs
export async function writeModLog(actorId, targetUserId, action, notes = "") {
    const { error } = await supabase.from("moderation_logs").insert([
        {
            actor_id: actorId,
            target_user_id: targetUserId,
            action,
            notes,
        },
    ]);

    if (error) throw error;
}

// Update user fields
export async function updateUser(id, updates) {
    const { error } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", id);

    if (error) throw error;
    return true;
}

// Admin actions
export async function banUser(actorId, user) {
    await updateUser(user.id, {
        is_banned: true,
        ban_reason: "Banned by admin",
        ban_expires: null,
    });

    await writeModLog(actorId, user.id, "ban");
}

export async function unbanUser(actorId, user) {
    await updateUser(user.id, {
        is_banned: false,
        ban_reason: null,
        ban_expires: null,
    });

    await writeModLog(actorId, user.id, "unban");
}

export async function pauseUser(actorId, user) {
    await updateUser(user.id, {
        is_paused: true,
    });

    await writeModLog(actorId, user.id, "pause");
}

export async function unpauseUser(actorId, user) {
    await updateUser(user.id, {
        is_paused: false,
    });

    await writeModLog(actorId, user.id, "unpause");
}

export async function promoteUser(actorId, user) {
    await updateUser(user.id, {
        role: "admin",
    });

    await writeModLog(actorId, user.id, "promote_admin");
}

export async function demoteUser(actorId, user) {
    await updateUser(user.id, {
        role: "user",
    });

    await writeModLog(actorId, user.id, "demote_admin");
}
