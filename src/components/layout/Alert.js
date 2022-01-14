import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const { alertMessage } = useContext(AlertContext);
    return (
        <div className="px-8 mb-4 flex gap-2">
            <svg
                className='w-6 h-6 flex-none mt-0.5'
                fill='none'
                viewBox='0 0 24 24'
            >
                <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
                <path
                    d='M8 8l8 8M16 8l-8 8'
                    stroke='#B91C1C'
                    strokeWidth='2'
                ></path>
            </svg>
            <p className="font-bold font-sm">{alertMessage.msg}</p>
        </div>
    )
}

export default Alert
