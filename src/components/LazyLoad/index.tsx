// 封装路由懒加载
import React, { Suspense } from "react";
import Loading from "@/components/Loading";

export const Lazyload = (comp: JSX.Element) => {
    return (
        // 因为路由懒加载，组件需要一段网络请求时间才能加载并渲染
        // 在组件还未渲染时，fallback就生效，来渲染一个加载进度条效果
        // 当组件渲染完成时，fallback就失效了
        <Suspense fallback={<Loading />}>
            {/*所有lazy的组件必须包裹Suspense组件，才能实现功能 */}
            {comp}
        </Suspense>
    );
};
