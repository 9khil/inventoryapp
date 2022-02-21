<script>
    async function onSubmit(e) {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        await fetch("http://localhost:4000/api/inventory/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            window.location.href = "/";
        });
    }
</script>

<div class="form-container">
    <form on:submit|preventDefault={onSubmit}>
        <div class="form-group">
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div class="form-group description">
            <input type="text" name="description" placeholder="Description" />
        </div>
        <div class="form-group location">
            <input type="number" name="location" placeholder="Location" />
        </div>
        <div class="form-group">
            <button type="submit">Add</button>
        </div>
    </form>
</div>

<style>
    .form-container {
        width: 100%;
        margin: 10px auto 50px auto;
    }
    .form-group input {
        padding: 5px;
        box-sizing: border-box;
        width: 100%;
        height: 38px;
        margin-bottom: 10px;
    }

    .form-group.location {
        text-align: left;
    }
    .form-group.location input {
        width: 80px;
    }

    button {
        background: #f5f5f5;
        border: 1px solid #d4d4d5;
        border-radius: 3px;
        color: #333;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        padding: 5px 10px;
        text-transform: uppercase;
    }

    @media only screen and (min-width: 768px) {
        .form-container {
            width: 500px;
        }
        form {
            display: grid;
            grid-template-columns: 180px 250px 80px 50px;
            column-gap: 10px;
        }
        .form-group input {
            margin: 0;
            padding: 5px;
            box-sizing: border-box;
            width: 100%;
            height: 30px;
        }
    }
</style>
