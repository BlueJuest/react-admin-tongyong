// 登录请求参数
export interface LoginAPIReq {
    userName: string;
    password: string;
    captcha: string;
}

// 登录请求返回值
type departmentType = {
    deptId: number;
    parentId: number;
    deptName: string;
    orderNum: number;
    status: string;
    isDelete: string;
    createdAt: string;
    createdBy: string;
    updatedAt: null;
    updatedBy: null;
};
type userInfoType = {
    id: number;
    deptId: number;
    userName: string;
    nickName: string;
    sex: string;
    password: string;
    avatar: string;
    email: string;
    mobile: string;
    isDelete: string;
    status: string;
    remark: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    department: departmentType;
};
type dataType = {
    token: string;
    userInfo: userInfoType;
};

export interface LoginAPIRes {
    code: number;
    message: string;
    data: dataType;
}
