import React from 'react';




interface Props {
    name:string
    htmlURL:string
    bio:string
    avatarUrl:string
}

export default function Home(props: Props) {
    return (
        <h1> {props.name}</h1>
    )
}

export async function getServerSideProps() {

    const res = await fetch('  https://api.github.com/users/AugustsKir')
    const data = await res.json()


    return { props: { name:data.name, htmlURL:data.html_url, bio:data.bio, avatarUrl:data.avatar_url } }
}


