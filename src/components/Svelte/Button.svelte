<script>
    let number = 10;
    const handleClick = () => {
        number++
        console.log(number);
    }
</script>

<button on:click={handleClick}> Click </button>

