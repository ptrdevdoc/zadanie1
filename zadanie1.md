## CZĘŚĆ OBOWIĄZKOWA
1. Plik server.js - wraz z komentarzami
2. Plik Docker - wraz s komentarzami
3.  a -> sudo docker build -t nodejs . <br>
    b -> docker run -it -p 8080:8080 --name nodeServ nodejs <br>
    c -> docker logs nodeServ <br>
    d -> docker history nodeServ
4.  1. -> docker run --rm --privileged multiarch/qemu-user-static
    2. -> docker buildx create --name sprawozdanie
    3. -> docker buildx use sprawozdanie
    4. -> docker buildx inspect --bootstrap
    5. -> docker buildx build -t ajres/sprawozdaniezadanie1:bx --platform linux/amd64,linux/amd64/v2,linux/amd64/v3,linux/386 --push .
    6. -> docker buildx imagetools inspect ajres/sprawozdaniezadanie1:bx

## CZĘŚĆ DODATKOWA
1. GitHubActions/GitHub Container Regitry wszystko w pliku .yaml
