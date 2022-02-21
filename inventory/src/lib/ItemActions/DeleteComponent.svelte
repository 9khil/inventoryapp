<script>
    import { onMount } from "svelte";
    import { Confirm } from 'svelte-confirm'
    import Fa from 'svelte-fa';
    import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

    export let row;

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
        }else{
            alert("Could not delete item: " + item.name);
        }
    }


 </script>

<Confirm 
    let:confirm="{confirmThis}"
    confirmTitle="Delete"
>
    <div class="delete-container" on:click={() => confirmThis(deleteItem, row)}>
        <span title={"Delete " + row.name} class="delete"><Fa class="trash-can" icon={faTrashCan}/></span>  
    </div>

    <span slot="title">
        Delete <strong>{row.name}</strong>
    </span>

    <span slot="description">
        This can not be undone!
    </span>

</Confirm>

<style>
    .delete-container{
        padding: 5px 10px;
    }
    .delete :global(.trash-can){
        color: #f35252;
    }

    :global(.confirm-dialog .confirm-button),
    :global(.confirm-dialog .confirm-button:hover)
    {
        background: #f35252;
    }
</style>