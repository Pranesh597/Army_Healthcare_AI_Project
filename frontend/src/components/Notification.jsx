import { toast } from "react-toastify";

export const successNotification = (message) => {

    toast.success(message, {

        position: "top-right",

        autoClose: 3000,

    });

};

export const errorNotification = (message) => {

    toast.error(message, {

        position: "top-right",

        autoClose: 3000,

    });

};

export const warningNotification = (message) => {

    toast.warning(message, {

        position: "top-right",

        autoClose: 3000,

    });

};

export const infoNotification = (message) => {

    toast.info(message, {

        position: "top-right",

        autoClose: 3000,

    });

};