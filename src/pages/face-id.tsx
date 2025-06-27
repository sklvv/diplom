import { useState } from "react";

export default function FaceIDUnlockDemo() {
	const [unlocked, setUnlocked] = useState(false);
	const [error, setError] = useState("");

	async function requestBiometricUnlock() {
		setError("");
		try {
			const publicKeyCredentialRequestOptions: PublicKeyCredentialRequestOptions =
				{
					challenge: Uint8Array.from("test-challenge", c => c.charCodeAt(0)),
					timeout: 60000,
					userVerification: "required",
				};

			const credential = await navigator.credentials.get({
				publicKey: publicKeyCredentialRequestOptions,
			});

			if (credential) {
				setUnlocked(true);
			} else {
				setError("Аутентификация не удалась");
			}
		} catch (err) {
			console.error(err);
			if (err instanceof Error) {
				setError("Ошибка аутентификации: " + err.message);
			} else {
				setError("Ошибка аутентификации");
			}
		}
	}

	return (
		<div style={{ padding: 20 }}>
			<h2>Face ID / Touch ID Демо</h2>
			{!unlocked ? (
				<>
					<button onClick={requestBiometricUnlock}>🔐 Разблокировать</button>
					{error && <p style={{ color: "red" }}>{error}</p>}
				</>
			) : (
				<div style={{ marginTop: 20 }}>
					<h3>✅ Доступ разрешён</h3>
					<p>
						Секретный текст: <strong>42 — это ответ на всё.</strong>
					</p>
				</div>
			)}
		</div>
	);
}
