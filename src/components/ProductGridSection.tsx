"use client";
import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "./ItemCard";
import { useInfiniteItemsQuery } from "@/queries/item";
import { useSearchParams } from "next/navigation";

export default function ProductGridSection() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || undefined;
  const types = searchParams.get("types")
    ? [searchParams.get("types")!]
    : undefined;
  const brands = searchParams.get("brands")
    ? searchParams.get("brands")!.split(",")
    : undefined;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteItemsQuery({ keyword, types, brands });

  // Intersection Observer로 스크롤 하단 감지 후 fetchNextPage()
  const loaderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <Box sx={{ py: 6, textAlign: "center" }}>상품을 불러오는 중...</Box>;
  }
  if (isError) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }} color="error.main">
        상품을 불러오지 못했습니다.
      </Box>
    );
  }
  const items = data?.pages.flatMap((page) => page.content ?? []) ?? [];
  if (items.length === 0) {
    return <Box sx={{ py: 6, textAlign: "center" }}>상품이 없습니다.</Box>;
  }

  return (
    <Box
      sx={{
        my: 6,
        display: "flex",
        alignItems: "center",
        px: 6,
      }}
    >
      <Grid container spacing={3} justifyContent="flex-start">
        {items.map((product) => (
          <Grid key={product.itemId} size={4}>
            <ItemCard {...product} />
          </Grid>
        ))}
      </Grid>
      <div ref={loaderRef} />
      {isFetchingNextPage && (
        <Box sx={{ py: 2, textAlign: "center" }}>불러오는 중...</Box>
      )}
    </Box>
  );
}
