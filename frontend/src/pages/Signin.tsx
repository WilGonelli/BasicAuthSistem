import styles from "../styles/styles.module.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUser } from "../viewmodels/userViewModel";

export default function Signin() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    viewPass,
    createUser,
    handleViewPass,
  } = useUser();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.containerForms}>
        <h1>
          sistema <span>faiklogin</span>
        </h1>
        <p className={styles.title}>Signin</p>
        <form action="" className={styles.containerInputs}>
          <label htmlFor="">nome:</label>
          <input
            type="text"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">email:</label>
          <input
            type="text"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">password:</label>
          <div>
            <input
              type={viewPass ? "text" : "password"}
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            {viewPass ? (
              <IoEyeOff
                className={styles.icon}
                onClick={() => {
                  handleViewPass();
                }}
              />
            ) : (
              <IoEye
                className={styles.icon}
                onClick={() => {
                  handleViewPass();
                }}
              />
            )}
          </div>
          <label htmlFor="">confirm password:</label>
          <div>
            <input
              type={viewPass ? "text" : "password"}
              value={confirmPassword || ""}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {viewPass ? (
              <IoEyeOff
                className={styles.icon}
                onClick={() => {
                  handleViewPass();
                }}
              />
            ) : (
              <IoEye
                className={styles.icon}
                onClick={() => {
                  handleViewPass();
                }}
              />
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              createUser();
              navigate("/");
            }}
          >
            signin
          </button>
          <button
            style={{ backgroundColor: "gray" }}
            onClick={() => navigate("/")}
          >
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
