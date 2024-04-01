import { ReactElement } from "react";
// 页面路由配置类型
export type Page = {
    path: string;
    element: ReactElement;
    meta?: {
        checkAuth: boolean,
        redirect?: string
    }
}

export interface BeforeEachProps {
    children?: ReactElement
}
