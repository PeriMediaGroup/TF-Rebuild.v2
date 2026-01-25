import { Routes, Route } from "react-router-dom";
import {
  SignupPage,
  LoginPage,
  ResetPasswordPage,
  HomePage,
  NotFoundPage,
  CsaePolicy,
  Members,
} from "./pages";
import "@triggerfeed/theme/scss/global.scss";
import { Header, Footer } from "./components/layout";
import {
  PrivateRoute,
  UserList,
  FullscreenImageModal,
} from "./components/common";
import CreatePost from "./components/posts/create";
import EditPost from "./components/posts/edit";
import TaggedPage from "./components/posts/tagged";
import MessageInbox from "./components/messages/MessageInbox";
import MessageThread from "./components/messages/MessageThread";
import ProfilePage from "./components/profiles/ProfilePage";
import SinglePost from "./components/posts/single";
import NotificationPanel from "./components/notifications/NotificationPanel";
import usePushNotifications from "./utils/usePushNotifications";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdDashboard from "./components/admin/ads/AdDashboard";
import AdForm from "./components/admin/ads/AdForm";
import RequireCeo from "./components/admin/RequireCeo";
import { useAuth } from "./auth/AuthContext";
import EmailConfirmation from "./components/auth/EmailConfirmation";
import usePageTracking from "./utils/usePageTracking";

const App = () => {
  const { user, loading } = useAuth();
  usePushNotifications(user, loading);
  usePageTracking();
  return (
    <>
      <Header />
      <div className="content-main">
        <Routes>
          <Route path="/verify-email" element={<EmailConfirmation />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/create-post"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/ads"
            element={
              <PrivateRoute>
                {user?.role === "ceo" ? <AdDashboard /> : <p>Access denied</p>}
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/ads/new"
            element={
              <PrivateRoute>
                <RequireCeo>
                  <AdForm />
                </RequireCeo>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/ads/edit/:id"
            element={
              <PrivateRoute>
                <RequireCeo>
                  <AdForm />
                </RequireCeo>
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-post/:id"
            element={
              <PrivateRoute>
                <EditPost />
              </PrivateRoute>
            }
          />
          <Route path="/user/:username" element={<ProfilePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/csae" element={<CsaePolicy />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/notifications" element={<NotificationPanel />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/tags/:tag" element={<TaggedPage />} />
          <Route path="/messages" element={<MessageInbox />} />
          <Route path="/messages/:userId" element={<MessageThread />} />
          <Route
            path="/fullscreenimagemodal"
            element={<FullscreenImageModal />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
