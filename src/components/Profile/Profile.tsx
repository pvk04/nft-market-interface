import { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { Form, InputGroup, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {web3, contract} from "../../config/connection"
import createTransaction from "../../utils/createTransaction";

import 'react-toastify/dist/ReactToastify.min.css';

function Profile() {
    const { user } = useAuth();
    const [refValue, setRefValue] = useState("");
    const [refCodePending, setRefCodePending] = useState(false);
    
    async function handleCopy() {
        document.execCommand("copy", true, user.refCode);
        await navigator.clipboard.writeText(user.refCode);
        toast.success('Реферальный код успешно скопирован', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    async function handleApplyRef() {
        setRefCodePending(true); // TODO disabled для кнопки и инпута во время промиса
        try {
          const refCodePart1 = refValue.slice(0, 6);
          const refCodePart2 = refValue.slice(6, 10);
          const refCodePart3 = refValue.slice(10, 14);
    
          const resultCode =
            web3.utils.toHex(refCodePart1) +
            refCodePart2 +
            web3.utils.asciiToHex(refCodePart3).slice(2);
            
            console.log(resultCode);
            
            toast.promise(
                createTransaction(user.address, "applyReferalCode", [resultCode], () => {

                }),
                {
                  pending: 'Проверяем реферальный код',
                  success: 'Реферальный код применен',
                  error: 'Ошибка. Проверьте правильность введенного кода'
                }
            );
        } catch (e) {
          console.log(e);
          alert("Ошибка");
        }
        finally {
            setRefCodePending(false)
        }
      }

    return (
        <div style={{margin: "0 auto"}}>
            <h1>Профиль</h1>
            <p>Адрес: {user.address}</p>
            <p>Логин: {user.login}</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <p>Реферальный код: {user.refCode}</p>
                <Button onClick={handleCopy}>copy</Button>
            </div>
            <p>Скидка за друзей: {Number(user.discount)}</p>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Введите реферальный код друга"
                value={refValue}
                onChange={(e) => {setRefValue(e.target.value)}}
                disabled={refCodePending}
                />
                <Button variant="success" id="basic-addon2" onClick={handleApplyRef} disabled={refCodePending}>готово</Button>
            </InputGroup>
            <ToastContainer />
        </div>
    )
}

export default Profile;