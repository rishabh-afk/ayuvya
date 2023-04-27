import classes from './SparkText.module.css';

const SparkleText = ({ text, className }) => {
    return (
        <p className={`relative ${className} text-center text-4xl md:text-6xl text-white font-bold`}>
            <span className={`absolute z-20 top-0 left-0 block w-full h-full ${classes.sparkles}`}>
                <span className='absolute block -top-3/4 -left-4'>
                    <svg width="21" height="28" viewBox="0 0 21 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1001 12.9001H15.6001C15.5001 12.9001 15.5001 12.9001 15.4001 12.9001H12.9001C12.8001 12.9001 12.7001 12.8001 12.6001 12.8001C11.7001 12.4001 11.4001 11.4001 11.1001 10.5001C10.9001 9.8001 10.7001 9.2001 10.6001 8.5001V0.200098C10.6001 -0.0999023 10.2001 -0.0999023 10.2001 0.200098V10.0001C10.1001 10.6001 10.0001 11.2001 9.6001 11.7001C9.5001 11.8001 9.4001 12.0001 9.3001 12.1001C8.6001 12.7001 7.5001 12.8001 6.6001 12.8001H6.5001H0.200098C-0.0999023 12.8001 -0.0999023 13.2001 0.200098 13.2001H7.3001H7.4001C9.3001 14.4001 10.0001 16.7001 10.2001 18.9001V26.9001C10.2001 27.2001 10.6001 27.2001 10.6001 26.9001V18.7001C11.0001 17.1001 11.5001 15.5001 12.6001 14.3001L12.7001 14.2001C13.2001 13.8001 13.8001 13.5001 14.5001 13.3001H20.2001C20.4001 13.3001 20.4001 12.9001 20.1001 12.9001Z" fill="black"></path>
                    </svg>
                </span>
                <span className='absolute block top-0 -left-14'>
                    <svg width="21" height="28" viewBox="0 0 21 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1001 12.9001H15.6001C15.5001 12.9001 15.5001 12.9001 15.4001 12.9001H12.9001C12.8001 12.9001 12.7001 12.8001 12.6001 12.8001C11.7001 12.4001 11.4001 11.4001 11.1001 10.5001C10.9001 9.8001 10.7001 9.2001 10.6001 8.5001V0.200098C10.6001 -0.0999023 10.2001 -0.0999023 10.2001 0.200098V10.0001C10.1001 10.6001 10.0001 11.2001 9.6001 11.7001C9.5001 11.8001 9.4001 12.0001 9.3001 12.1001C8.6001 12.7001 7.5001 12.8001 6.6001 12.8001H6.5001H0.200098C-0.0999023 12.8001 -0.0999023 13.2001 0.200098 13.2001H7.3001H7.4001C9.3001 14.4001 10.0001 16.7001 10.2001 18.9001V26.9001C10.2001 27.2001 10.6001 27.2001 10.6001 26.9001V18.7001C11.0001 17.1001 11.5001 15.5001 12.6001 14.3001L12.7001 14.2001C13.2001 13.8001 13.8001 13.5001 14.5001 13.3001H20.2001C20.4001 13.3001 20.4001 12.9001 20.1001 12.9001Z" fill="black"></path>
                    </svg>
                </span>
                <span className='absolute block -bottom-1/2 -left-10'>
                    <svg width="21" height="28" viewBox="0 0 21 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1001 12.9001H15.6001C15.5001 12.9001 15.5001 12.9001 15.4001 12.9001H12.9001C12.8001 12.9001 12.7001 12.8001 12.6001 12.8001C11.7001 12.4001 11.4001 11.4001 11.1001 10.5001C10.9001 9.8001 10.7001 9.2001 10.6001 8.5001V0.200098C10.6001 -0.0999023 10.2001 -0.0999023 10.2001 0.200098V10.0001C10.1001 10.6001 10.0001 11.2001 9.6001 11.7001C9.5001 11.8001 9.4001 12.0001 9.3001 12.1001C8.6001 12.7001 7.5001 12.8001 6.6001 12.8001H6.5001H0.200098C-0.0999023 12.8001 -0.0999023 13.2001 0.200098 13.2001H7.3001H7.4001C9.3001 14.4001 10.0001 16.7001 10.2001 18.9001V26.9001C10.2001 27.2001 10.6001 27.2001 10.6001 26.9001V18.7001C11.0001 17.1001 11.5001 15.5001 12.6001 14.3001L12.7001 14.2001C13.2001 13.8001 13.8001 13.5001 14.5001 13.3001H20.2001C20.4001 13.3001 20.4001 12.9001 20.1001 12.9001Z" fill="black"></path>
                    </svg>
                </span>
                <span className='absolute block top-2/3 -right-12'>
                    <svg width="21" height="28" viewBox="0 0 21 28" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1001 12.9001H15.6001C15.5001 12.9001 15.5001 12.9001 15.4001 12.9001H12.9001C12.8001 12.9001 12.7001 12.8001 12.6001 12.8001C11.7001 12.4001 11.4001 11.4001 11.1001 10.5001C10.9001 9.8001 10.7001 9.2001 10.6001 8.5001V0.200098C10.6001 -0.0999023 10.2001 -0.0999023 10.2001 0.200098V10.0001C10.1001 10.6001 10.0001 11.2001 9.6001 11.7001C9.5001 11.8001 9.4001 12.0001 9.3001 12.1001C8.6001 12.7001 7.5001 12.8001 6.6001 12.8001H6.5001H0.200098C-0.0999023 12.8001 -0.0999023 13.2001 0.200098 13.2001H7.3001H7.4001C9.3001 14.4001 10.0001 16.7001 10.2001 18.9001V26.9001C10.2001 27.2001 10.6001 27.2001 10.6001 26.9001V18.7001C11.0001 17.1001 11.5001 15.5001 12.6001 14.3001L12.7001 14.2001C13.2001 13.8001 13.8001 13.5001 14.5001 13.3001H20.2001C20.4001 13.3001 20.4001 12.9001 20.1001 12.9001Z" fill="black"></path>
                    </svg>
                </span>
                <span className='absolute block -bottom-3/4 -right-4'>
                    <svg width="21" height="28" viewBox="0 0 21 28" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1001 12.9001H15.6001C15.5001 12.9001 15.5001 12.9001 15.4001 12.9001H12.9001C12.8001 12.9001 12.7001 12.8001 12.6001 12.8001C11.7001 12.4001 11.4001 11.4001 11.1001 10.5001C10.9001 9.8001 10.7001 9.2001 10.6001 8.5001V0.200098C10.6001 -0.0999023 10.2001 -0.0999023 10.2001 0.200098V10.0001C10.1001 10.6001 10.0001 11.2001 9.6001 11.7001C9.5001 11.8001 9.4001 12.0001 9.3001 12.1001C8.6001 12.7001 7.5001 12.8001 6.6001 12.8001H6.5001H0.200098C-0.0999023 12.8001 -0.0999023 13.2001 0.200098 13.2001H7.3001H7.4001C9.3001 14.4001 10.0001 16.7001 10.2001 18.9001V26.9001C10.2001 27.2001 10.6001 27.2001 10.6001 26.9001V18.7001C11.0001 17.1001 11.5001 15.5001 12.6001 14.3001L12.7001 14.2001C13.2001 13.8001 13.8001 13.5001 14.5001 13.3001H20.2001C20.4001 13.3001 20.4001 12.9001 20.1001 12.9001Z" fill="black"></path>
                    </svg>
                </span>
            </span>
            {text}
        </p>
    )
}

export default SparkleText