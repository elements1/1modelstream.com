import { useContext } from 'react'
import { ThemeContext } from './../../pages/_app'

export default function Paragraph3() {
    const {themeMode, toggleThemeMode} = useContext(ThemeContext)

    const sellNftDetails = [
        {
            iconUrl : "/assets/svg/coin",
            title : "Create your Owen Fashion Token",
            description : "Create an NFT token to Blockchain network and sell it to your marketplace or Stake and get froffit",
        }, 
        {
            iconUrl : "/assets/svg/sell-nft-icon3",
            title : "Set Up Your Wallet",
            description : "Once you set up wallet of choice, connect it to model Stream by clicking the wallet icon in the top right corner. Learn about the wallets we support",
        },
         {
            iconUrl : "/assets/svg/sell-nft-icon1",
            title : "Add Your NFTs",
            description : "Upload your pictures, add a title and description, and customize your NFTs with properties, stats, and unlockable content",
        },
        {
            iconUrl : "/assets/svg/sell-nft-icon2",
            title : "Buy and Sell NFTs",
            description : "You can Buy and Sell any NFT items with new price and share it with friends",
        },
    
        {
            iconUrl : "/assets/svg/sell-nft-icon4",
            title : "List Picture For Sale",
            description : "Sell your Pictures with price and have ability to cancel anytime from sale and edit price",
        },  
         {
            iconUrl : "/assets/svg/sell-nft-icon2",
            title : "Resell Items",
            description : "You can resell any NFT items that you bougth from other user with new price and share it with friends",
        },
    ]

    return (
        <div className='w-full h-auto'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-10 mt-8 sm:mx-16 sm:mt-16 lg:mx-[9vw] lg:mt-[9vw]'>
                {sellNftDetails.map((item, index) => (
                    <div key={"sell-nft" + index.toString()} className='grid grid-cols-1 gap-4'>
                        <img src={item.iconUrl + (themeMode ? '.svg' : '-dark.svg')}></img>
                        <h1 className='text-white dark:text-gray-800 text-xl'>{item.title}</h1>
                        <p className='text-[#A2A6D0] dark:text-gray-800 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
