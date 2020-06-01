<script>
 async function getProcessedData(url) {
        try{
            const dato = await downloadData(url)
                    return await processDataInWorker(dato)
        }
        catch(e){
                return downloadFallbackData(url) 
        }
   }

</script>