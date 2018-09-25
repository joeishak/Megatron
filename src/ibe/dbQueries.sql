-- Database Queries
    -- Financial Card Database Query
        /** DB Query 1 NAME: FinancialActualTargetQuery **/ 
        -- Timeout: 400

        select quarter, geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot, 
            sum(cast (net_new_arr_actual as real))            as NetNewARRActual,
            sum(cast (net_new_arr_target as real))            as NetNewARRTarget, 
            sum(cast (net_cancellations_arr_actual as real))  as NetCancellationARRActual,  
            sum(cast (net_cancellations_arr_target as real))  as NetCancellationARRTarget, 
            sum(cast (gross_new_arr_actual as real))          as GrossNewARRActual,
            sum(cast (gross_new_arr_target as real))          as GrossNewARRTarget,
            sum(cast (term_end_renewal_actual as real))       as RenewalAtFPActual,
            sum(cast (term_end_renewal_target as real))       as RenewalAtFPTarget
        from  rtb
        group by quarter,geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot
		order by quarter;

    -- Financial Card Multichart Details
        /** DB Query 2 NAME: FinancialMultichartQuery **/
        -- Timeout: 400

         select 
                quarter,
                Month(fiscal_wk_ending_date) as Month,
                DatePArt(wk, fiscal_wk_ending_date) as Week,
                geo_code, 
                product_name, 
                market_area_code,
                route_to_market,
                subscription_offering,
                segment_pivot,
                sum(cast (net_new_arr_actual as real))               as NetNewARRActual,
                sum(cast (net_new_arr_target as real))               as NetNewARRTarget, 
                sum(cast (net_cancellations_arr_actual as real))     as NetCancellationARRActual,  
                sum(cast (net_cancellations_arr_target as real))     as NetCancellationARRTarget, 
                sum(cast (gross_new_arr_actual as real))             as GrossNewARRActual,
                sum(cast (gross_new_arr_target as real))             as GrossNewARRTarget,
                sum(cast (term_end_renewal_actual as real))          as RenewalAtFPActual,
                sum(cast (term_end_renewal_target as real))          as RenewalAtFPTarget,
                sum(cast (net_new_arr_ly as real))                   as NetNewARRLY,
                sum(cast (gross_new_arr_ly as real))                 as GrossNewARRLY, 
                sum(cast (net_cancellations_arr_ly as real))         as NetCancellationsARRLY,
                sum(cast (term_end_renewal_ly as real ))             as TermEndRenewalLY		
            from rtb
                where try_cast(gross_new_arr_ly as real) is not null
                and try_cast(net_new_arr_ly as real) is not null
                and try_cast(net_cancellations_arr_ly as real) is not null
                and try_cast(term_end_renewal_ly as real) is not null
            group by quarter,Month(fiscal_wk_ending_date),DatePArt(wk, fiscal_wk_ending_date) ,geo_code, product_name, market_area_code,
                route_to_market,subscription_offering,segment_pivot    
            order by quarter;
    -- Filter Values
        --Timeout for All: 50
        /* DB Query 3 Name: QuarterFilters */
        /* Select all the unique values for Quarter */
        SELECT DISTINCT quarter Quarter from rtb;
        /* DB Query 4 Name: GeoFilters */
        /* Select all the unique values for Geo */
        SELECT DISTINCT geo_code Geo from rtb;
        /* DB Query 3 Name: ProductFilters */
        /* Select all the unique values for Product Name */
        SELECT DISTINCT product_name ProductName from rtb;
        /* DB Query 3 Name: SubscriptionFilters */
        /* Select all the unique values for Subscription Offering */
        SELECT DISTINCT subscription_offering Subscription from rtb;
        /* DB Query 3 Name: RouteFilters */
        /* Select all the unique values for Route To Market */
        SELECT DISTINCT route_to_market RouteToMarket from rtb;
        /* DB Query 3 Name: SegmentFilters */
        /* Select all the unique values for Segment */
        SELECT DISTINCT segment_pivot Segment from rtb;
        /* DB Query 3 Name: MarketFilters */
        SELECT DISTINCT market_area MarketAreas from rtb;



      