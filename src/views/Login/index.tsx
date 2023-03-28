import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import styles from "./index.module.scss";
import "./login.less";
import initLoginBg from "./init";
import { useNavigate } from "react-router-dom";
import { CaptchaAPI, LoginAPI } from "@/api/auth";

const Login = () => {
    const navigate = useNavigate();

    // 获取用户输入的信息
    const [userName, setUserName] = useState<string>(""); // 用户名
    const [password, setPassword] = useState<string>(""); // 密码
    const [captcha, setCaptcha] = useState<string>(""); // 验证码
    const [pcImg, setPcImg] = useState<string>(""); // 验证码图片
    const getFormData = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, placeholder } = e.target;
        if (placeholder === "用户名") {
            setUserName(value);
        } else if (placeholder === "密码") {
            setPassword(value);
        } else if (placeholder === "验证码") {
            setCaptcha(value);
        }
    };
    // 获取验证码
    const getCaptcha = async () => {
        await CaptchaAPI().then((res) => {
            // 将svg字符串转换成base64
            const svg = new Blob([res], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svg);
            setPcImg(url);
        });
    };

    // 登录
    const loginBtn = async () => {
        // 收集表单信息
        const userInfo = {
            userName,
            password,
            captcha,
        };
        console.log(userInfo);
        await LoginAPI(userInfo).then((res) => {
            console.log(res);
        });

        // navigate("/home");
    };
    // 加载完这个组件之后，加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () {
            initLoginBg();
        };
        getCaptcha();
    }, []);

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: "flex" }}>
                        <Input placeholder="用户名" onChange={getFormData} />
                        <Input.Password placeholder="密码" onChange={getFormData} />
                        {/* 验证码盒子 */}
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={getFormData} />
                            <div className="captchaImg" onClick={getCaptcha}>
                                <img height="38" src={pcImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={loginBtn}>
                            登录
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};
export default Login;
