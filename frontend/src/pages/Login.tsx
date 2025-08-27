import styles from "../styles/styles.module.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUser } from "../viewmodels/userViewModel";

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    viewPass,
    findUser,
    handleViewPass,
  } = useUser();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.containerForms}>
        <h1>
          sistema <span>faiklogin</span>
        </h1>
        <p className={styles.title}>Login</p>
        <form action="" className={styles.containerInputs}>
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
              autoComplete="off"
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
            onClick={async (e) => {
              e.preventDefault();
              const response = await findUser();
              if (response) {
                navigate("/home");
              }
            }}
          >
            login
          </button>
          <button onClick={() => navigate("/signin")}>signin</button>
        </form>
      </div>
    </div>
  );
}
