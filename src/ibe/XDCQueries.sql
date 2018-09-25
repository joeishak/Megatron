
-- Financial Card XDC
    -- ID: {/* Adobe Fill In Here */}
    -- XDC #1 NAME: Summary
    -- Data Sources: 
    --     1. FinancialActualTargetQuery
    --     2. FinancialMultichartQuery


        -- Cache query 1: FinancialActualTargetQuery
        select 
            sum(NetNewARRActual          )      as NetNewARRActual,
            sum(NetNewARRTarget          )      as NetNewARRTarget, 
            sum(NetCancellationARRActual )      as NetCancellationARRActual,  
            sum(NetCancellationARRTarget )      as NetCancellationARRTarget, 
            sum(GrossNewARRActual        )      as GrossNewARRActual,
            sum(GrossNewARRTarget        )      as GrossNewARRTarget,
            sum(RenewalAtFPActual        )      as RenewalAtFPActual,
            sum(RenewalAtFPTarget        )      as RenewalAtFPTarget
            from financialactualtargetquery
                where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters);
            


        -- Cache Query 2: FinancialMultiChartQuery
            -- Source: FinancialMultiChartQuery
          select 
            Week,
            sum(NetNewARRActual          )      as NetNewARRActual,
            sum(NetNewARRTarget          )      as NetNewARRTarget, 
            sum(NetCancellationARRActual )      as NetCancellationARRActual,  
            sum(NetCancellationARRTarget )      as NetCancellationARRTarget, 
            sum(GrossNewARRActual        )      as GrossNewARRActual,
            sum(GrossNewARRTarget        )      as GrossNewARRTarget,
            sum(RenewalAtFPActual        )      as RenewalAtFPActual,
            sum(RenewalAtFPTarget        )      as RenewalAtFPTarget,
		    sum(NetNewARRLY             )       as NetNewARRLY,
            sum(GrossNewARRLY           )       as GrossNewARRLY, 
            sum(NetCancellationsARRLY   )       as NetCancellationsARRLY,
            sum(TermEndRenewalLY        )       as TermEndRenewalLY		
		    from FinancialMultichartQuery
                 where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters)
            group by Week;
        -- Cache Query 3: FinancialMultichartAllQuarterQuery
            -- Source: FinancialMultiChartQuery
            select 
            Month,
            sum(NetNewARRActual          )      as NetNewARRActual,
            sum(NetNewARRTarget          )      as NetNewARRTarget, 
            sum(NetCancellationARRActual )      as NetCancellationARRActual,  
            sum(NetCancellationARRTarget )      as NetCancellationARRTarget, 
            sum(GrossNewARRActual        )      as GrossNewARRActual,
            sum(GrossNewARRTarget        )      as GrossNewARRTarget,
            sum(RenewalAtFPActual        )      as RenewalAtFPActual,
            sum(RenewalAtFPTarget        )      as RenewalAtFPTarget,
		    sum(NetNewARRLY             )       as NetNewARRLY,
            sum(GrossNewARRLY           )       as GrossNewARRLY, 
            sum(NetCancellationsARRLY   )       as NetCancellationsARRLY,
            sum(TermEndRenewalLY        )       as TermEndRenewalLY		
		    from FinancialMultichartQuery
                 where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters)
            group by Month;


-- Filter Values XDC
    -- ID: {/* Adobe Fill In Here */}
    -- XDC #1 Name: Filters
    -- Data Sources:
    --  1. GeoFilters
    --  2. QuarterFilters
    --  3. ProductFilters
    --  4. SubscriptionFilters
    --  5. SegmentFilters
    --  6. RouteFilters
    --  7. MarketFilters

        -- Cache Query 1: GeoFilters
            /* Source: GeoFilters */
        SELECT * FROM GeoFilters;
        -- Cache Query 2: QuarterFilters
            /* Source: QuarterFilters */
        SELECT * FROM QuarterFilters;
        -- Cache Query 3: ProductFilters
            /* Source: ProductFilters */
        SELECT * FROM ProductFilters;
        -- Cache Query 4: SubscriptionFilters
            /* Source: SubscriptionFilters */
        SELECT * FROM SubscriptionFilters;
        -- Cache Query 5: SegmentFilters
            /* Source: SegmentFilters */
        SELECT * FROM SegmentFilters;
        -- Cache Query 6: RouteFilters
            /* Source: RouteFilters */
        SELECT * FROM RouteFilters;
        -- Cache Query 7: MarketFilters
            /* Source: MarketFilters */
        SELECT * FROM MarketFilters;

