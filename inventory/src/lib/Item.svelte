<script>
    export let item;
    
    async function deleteItem(item) {
    const response = await fetch('http://localhost:4000/api/inventory/', {
            method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: item._id
        })
    });
    const data = await response.json();
    if(data.success){
        window.location.href = '/';
    }
}
</script>

<article>
    <div class="item-info">
        <h1>{item.name}</h1>
        <p>
            {item.description}
        </p>
        <p>inStock: {item.inStock}</p>
    </div>
    <div class="item-actions">
        <button on:click={
            () => deleteItem(item)
        }>Delete</button>
</article>