import { useEffect, useState } from "react"

const useApps = () => {
    const [allApp, setAllApp] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        setLoading(true);

        fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => {
            setAllApp(data)
            setLoading(false);
        });

    }, [])

    const removeInstalledApp = (id) => {
        let installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
        installed = installed.filter(appId => appId.toString() !== id.toString());
        localStorage.setItem("installedApps", JSON.stringify(installed));
    };

    return {allApp, loading, setAllApp, removeInstalledApp}
}

export default useApps;