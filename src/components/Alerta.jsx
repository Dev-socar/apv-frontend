
const Alerta = ({ alerta }) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-tr p-3 rounded-xl font-bold mb-10 text-white text-center uppercase`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta