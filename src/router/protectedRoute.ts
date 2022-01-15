import state from "@/store/state";

const adminProtectedRoute = (to: any, from: any, next: any) => {
  if (state.currentUser.adminAccess === true) {
    next();
  } else {
    next("/login");
  }
};

const teacherProtectedRoute = (to: any, from: any, next: any) => {
  if (state.currentUser.professorAccess === true) {
    next();
  } else {
    next("/login");
  }
};

const studentProtectedRoute = (to: any, from: any, next: any) => {
  if (state.currentUser.studentAccess === true) {
    next();
  } else {
    next("/login");
  }
};

export { adminProtectedRoute, teacherProtectedRoute, studentProtectedRoute };
