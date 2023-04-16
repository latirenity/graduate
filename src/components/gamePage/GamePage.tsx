import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./GamePage.styled";
import { useParams } from "react-router-dom";
import { gameInfoActions } from "../../redux/gameInfo/gameInfoSlice";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const { 
    name, 
    description,
    background_image, 
    short_screenshort, 
    developer,
    released, 
    rating } = useAppSelector( state => state.gameInfo.gamesInfo)

  const { gameId } = useParams();
  const gameIdToNumber = +(gameId ?? 0);

  useEffect(() => {
    dispatch(gameInfoActions.getGame(gameIdToNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.container>
      <C.wrapper>
        <S.titleContainer>
          <S.title>{name}</S.title>
          <S.cartButton>Add to cart</S.cartButton>
        </S.titleContainer>

        <S.contentContainer>
          <S.swiperContainer>SLIDER</S.swiperContainer>

          <S.infoContainer>
            <S.infoImageContainer>
              <S.infoImage src={background_image} alt="not found" />
            </S.infoImageContainer>
            <S.infoDescription>{description}</S.infoDescription>
            <S.infoProperties>Developer: <S.span>{developer}</S.span></S.infoProperties>
            <S.infoProperties>Release date: <S.span>{released}</S.span></S.infoProperties>
            <S.infoProperties>Overall rating: <S.span>{rating} / 5</S.span></S.infoProperties>
          </S.infoContainer>
        </S.contentContainer>
      </C.wrapper>
    </S.container>
  );
};
