export const validateSection = () => {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login';
    }
}