import state from "@/store/state";

const protectedRoute = (to: any, from: any, next: any) => {
  if (state.isAdmin === true) {
    next();
  } else {
    next("/login");
  }
};

export default protectedRoute;
