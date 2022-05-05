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
Dodatek 1. GitHubActions/GitHub Container Regitry wszystko w pliku .yaml <br>
Dodatek 2.  1   a.1 -> Pobranie obrazu: docker pull registry <br>
                a.2 -> docker run -d -p 6677:5000 --restart always --name registry registry <br>
                b.1 -> docker pull ubuntu<br>
                b.2 -> docker tag ubuntu localhost:6677/ubuntu-reg<br>
                b.3 -> docker push localhost:6677/ubuntu-reg<br>
