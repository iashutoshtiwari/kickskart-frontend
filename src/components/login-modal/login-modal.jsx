import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Fade, FormControl, TextField } from "@mui/material";
import Button from "../common/button/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "@/redux/actions/home";

import styles from "./login-modal.module.scss";
import { setLoginModal } from "@/redux/actions/ui";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	height: 450,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	bgcolor: "background.paper",
	border: "2px solid background.paper",
	borderRadius: 4,
	boxShadow: 24,
	p: 4,
};

const LoginModal = () => {
	const openLoginModal = useSelector((state) => state?.ui?.openLoginModal ?? false);

	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isSignup, setIsSignUp] = useState(false);

	const onSwitchMethodClick = () => {
		setIsSignUp(!isSignup);
	};

	const onNameChange = (event) => {
		setName(event.target.value);
	};
	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleClose = () => {
		dispatch(setLoginModal(false));
	};

	const onSubmitClick = () => {
		const data = { name, email, password };
		if (email && password) {
			if (isSignup && name) {
				dispatch(createUser(data));
			} else {
				dispatch(loginUser(data));
			}
		}
	};

	return (
		<div>
			<Modal
				open={openLoginModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				closeAfterTransition
			>
				<Fade in={openLoginModal}>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							{isSignup ? `Sign up` : `Log In`}
						</Typography>
						<FormControl fullWidth>
							{isSignup && (
								<TextField
									value={name}
									onChange={onNameChange}
									required
									label="Name"
									variant="standard"
									margin="dense"
								/>
							)}

							<TextField
								value={email}
								onChange={onEmailChange}
								required
								label="Email"
								type="email"
								variant="standard"
								margin="dense"
							/>
							<TextField
								value={password}
								onChange={onPasswordChange}
								required
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="standard"
								margin="dense"
							/>
						</FormControl>
						<div style={{ margin: "20px" }}>
							<Button
								onClick={onSubmitClick}
								width={200}
								height={40}
								buttonLabel={isSignup ? "Signup" : "Login"}
							/>
						</div>
						<div onClick={onSwitchMethodClick} className={styles["switch-method"]}>
							{isSignup ? `Already a member? ` : `Not a member? `}
							<u>Click here</u>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default LoginModal;
