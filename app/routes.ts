import { type RouteConfig, index, route,
    layout, prefix
 } from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("users", "./routes/users.tsx"), // Add this line
    layout("./routes/auth/layout.tsx", [
        route("login", "./routes/auth/login.tsx"),
        route("register", "./routes/auth/register.tsx"),
    ]),
    ...prefix("concerts", [
        index("./routes/concerts/home.tsx"),
        route(":city", "./routes/concerts/city.tsx"),
        route("trendings", "./routes/concerts/trendings.tsx"),
    ]),
    route("dashboard", "./routes/dashboard/dashboard.tsx", [
        index("./routes/dashboard/home.tsx"),
        route("settings", "./routes/dashboard/settings.tsx"),    
        route("stats", "./routes/dashboard/stats.tsx"),
    ]),
    route("*", "./routes/error.tsx"),
] satisfies RouteConfig;
