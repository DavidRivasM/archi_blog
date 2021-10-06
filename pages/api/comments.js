//import { request,gql } from 'graphql-request';
import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function asynchandler(req, res) {

    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
      },
    })

    let query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(
            data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}
            ) {
            id
            }
        }
      
    `
    let result = await graphQLClient.request(query,
        {
            "name": req.body.name,
            "email": req.body.email,
            "comment": req.body.comment,
            "slug": req.body.slug
      })
    // let result = await request(
    //     graphqlAPI, 
    //     query,
    //     {
    //         authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzI5MzEwNTIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdTU2ZjkyMTE0czkwMXl6MGNlOWFoM2YvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODQyMTFmOWQtODk5My00ODQ2LWExZDItOWI2ZmUwNjVlMGI3IiwianRpIjoiY2t1NW96anh2MXRnYzAxeG5nbDNyM3F0MyJ9.Kg-yIyRma2sHtDUsDGWV-wa7DFQow98Yea7qkVIH5YmTg2C0XpwS8XSvnPuB64z09l1Jd0IKBHes_Sxv8EwMk-XlTjzqgxx3u96xBTlv5t-UA94zlCv2E1GEGWtsCWqxHBxISXB5wHwigqS_pZYCHWjG0WwjIj8aQ2z_SxwiZErxwFCuG9l1f12_Wfs2IDmkQMA8mFsbQvOSy-MqxuMt-5o82oM9i-Usi69j2vm4veBQcKss9TWGkK-ZcVkifl_-JDrJ41qXu9G66WxnZzI2TQF9BcanwuUmsB0N_fhnkcX4BFN5Xq0OmDfSOKNKUQ6zZCy1PbU6vX4sQJ5eiRgFPXmkXtnTcsVgVsrbO2sP8SKj0KLA4diI3X5UsxduzDRCXP833_8z3AfQQmp0zUg4caDtVjHTBzBRMLNeX10PFaFQ6toeFvrFjwcNHO7jUmgdUR6kYhL8cNu1VLNuwOyZN0Lefc6kpiMTM7bYbmGwQq3FaICbyxl2hB_OQopXWlBcDGopGCrO3ZRnqGdagPUxVFcIMcQfB9kKeO78P8LbUjRinoTqBBSIclKxWNjkGU-joHAA4T5-FE3hknwYQWwffhEoFn2HNyEFLDPVFd7cDGZciCjd4app3a4YtJbFx9D18gjORam5XNI988iwo56FsbTAX-VjmYM-9M5LQ0xYsD8"
    //     }
    // )
    return res.status(200).send(result)
}
  