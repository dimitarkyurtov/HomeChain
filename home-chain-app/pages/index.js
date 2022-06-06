import 'bulma/css/bulma.css'
import Web3 from 'web3'
import { useState } from 'react'
import styles from '../styles/Home-chain.module.css'
import Head from 'next/head'
import homeChainContract from '../blockchain/homechain'
import Estate from './Estate';
import Search from './Search'
import YourEstates from './YourEstates'
import DetailedEstateView from './DetailedEstateView'

export default function Home() {
    const [activeTab, setActiveTab] = useState('');
    const [error, setError] = useState('');
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [vmContract, setVmContract] = useState(null);
    const [eid, setEid] = useState(null);

    const setTab = (activeTab, id) => {
        if(id) setEid(id)
        setActiveTab(activeTab)
    }

    const connectWalletHandler = async () => {
        /* check if metamask is available */
        if (typeof window !== undefined && typeof window.ethereum !== undefined){
            try{
                /* request wallet connection */
                await window.ethereum.request({ method: "eth_requestAccounts" })
                
                /* set web3 instance */
                let web3 = new Web3(window.ethereum)
                setWeb3(web3)

                /* get list of accounts */
                const accounts = await web3.eth.getAccounts()
                console.log(accounts)
                setAddress(accounts[0])

                /* create local copy of the contract interface */
                const vm = homeChainContract(web3)
                setVmContract(vm)

            } catch(err){
                setError(err.message)
            }
        } else{
            console.log("Please install metamask")
        }
    }

    return(
        <div className={styles.main}>
            <Head>
                <title>Home chain App</title>
                <meta name="description" content="Home chain app" />
            </Head>
            <nav className="navbar mt-4 mb-6">
                <div className='container'>
                    <div className='navbar-brand'>
                        <h1>Home chain</h1>
                    </div>
                    <div className='navbar-end'>
                        <button onClick={() => setTab('Estate')} class="button is-link">
                            Estate
                        </button>
                    </div>
                    {
                        vmContract ? 
                        <div className='navbar-end'>
                            <button onClick={() => setTab('yourEstates')} class="button is-link">
                                Your estates
                            </button>
                        </div> 
                        : 
                        null
                    }
                    <div className='navbar-end'>
                        <button onClick={() => setTab('Search')} class="button is-link">
                            Search
                        </button>
                    </div>
                    <div className='navbar-end'>
                        <button onClick={connectWalletHandler} className='button is-primary'>
                            Connect wallet
                        </button>
                    </div>
                </div>
            </nav>
            <div>
                {
                    activeTab === 'Estate' ? <Estate vmContract={vmContract} address={address}/> : null
                }
                {
                    activeTab === 'Search' ? <Search vmContract={vmContract} setActiveTab={setTab}/> : null
                }
                {
                    activeTab === 'yourEstates' ? <YourEstates address={address} vmContract={vmContract} setActiveTab={setTab}/> : null
                }
                {
                    activeTab === 'View' ? <DetailedEstateView web3={web3} address={address} vmContract={vmContract} eid={eid}/> : null
                }
            </div >
        </div>
    )
}