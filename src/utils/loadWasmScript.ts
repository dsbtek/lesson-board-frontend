declare global {
    interface Window {
        createModule?: any;
    }
}
export const loadWasmScript = (src: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
            if (window.createModule) {
                resolve(window.createModule);
            } else {
                reject(new Error('createModule is not available on window'));
            }
        };

        script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
    });
};
