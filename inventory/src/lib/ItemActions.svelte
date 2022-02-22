<script>
    import InStockComponent from "./ItemActions/InStockComponent.svelte";
    import DeleteComponent from "./ItemActions/DeleteComponent.svelte";

    export let row;
    export let onInStockToggle;
</script>

<div class="item-actions-container">
    <InStockComponent {row} {onInStockToggle} />
    <DeleteComponent {row} />
</div>

<style>
    @media only screen and (min-width: 768px) {
        .item-actions-container {
            display: flex;
            justify-content: center;
        }
    }
</style>
