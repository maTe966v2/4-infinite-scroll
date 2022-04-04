const createUser = users => {
    users.map(user => {
        let userId = document.createElement("p");
        let userName = document.createElement("p");
        let userWebsite = document.createElement("p");
        userId.innerHTML = `User ID: ${user.id}`;
        userName.innerHTML = `User ID: ${user.name}`;
        userWebsite.innerHTML = `User ID: ${user.website}<br />--------`;

        [userId, userName, userWebsite].map(el =>
            document.body.insertBefore(el, document.querySelector("script"))
        );
    });
};

const getData = () => {
    fetch("https://akademia108.pl/api/ajax/get-users.php", {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => createUser(data));
};

const scrollToEndOfPage = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop === scrollHeight - clientHeight) {
        getData();
    }
};
window.addEventListener("load", getData());
window.addEventListener("scroll", scrollToEndOfPage);
