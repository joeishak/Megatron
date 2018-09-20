   
   --Count all the bad records

   --Term End Rewewal Target
   Select count(*)
   from dbo.rtb2
   where term_end_renewal_target like '%\N%';
   
   -- Term End Renewal Actual
   Select count(*)
   from dbo.rtb2
   where term_end_renewal_actual like '%\N%';
    -- Term End Renewal LY
   Select count(*)
   from dbo.rtb2
   where term_end_renewal_ly like '%\N%';
    -- Net New Arr Target
   Select count(*)
   from dbo.rtb2
   where net_new_arr_target like '%\N%';

    -- Net New Arr Actual
   Select count(*)
   from dbo.rtb2
   where net_new_arr_actual like '%\N%';

    -- Net New Arr LY
   Select count(*)
   from dbo.rtb2
   where net_new_arr_ly like '%\N%';
    --Gross New Arr Target
   Select count(*)
   from dbo.rtb2
   where gross_new_arr_target like '%\N%';

    --Gross New Arr Actual
   Select count(*)
   from dbo.rtb2
   where gross_new_arr_actual like '%\N%';

    --Gross New Arr LY
    Select count(*)
   from dbo.rtb2
   where gross_new_arr_ly like '%\N%';
    --Net Cancellations Arr Target
    Select count(*)
   from dbo.rtb2
   where net_cancellations_arr_target like '%\N%';

    --Net Cancellations Arr Actual
    Select count(*)
   from dbo.rtb2
   where net_cancellations_arr_actual like '%\N%';

    --Net Cancellations Arr LY
    Select count(*)
   from dbo.rtb2
   where net_cancellations_arr_ly like '%\N%';
   

   -- Update all \N to 0.0
   --Term End Rewewal Target
   update dbo.rtb2
   set term_end_renewal_target = 0.0
   where term_end_renewal_target like '%\N%';
    update dbo.rtb2
   set term_end_renewal_actual = 0.0
   where term_end_renewal_actual like '%\N%';
     update dbo.rtb2
   set term_end_renewal_ly = 0.0
   where term_end_renewal_ly like '%\N%';

   -- New New Arr 
   update dbo.rtb2
   set net_new_arr_target = 0.0
   where net_new_arr_target like '%\N%';
   update dbo.rtb2
   set net_new_arr_actual = 0.0
   where net_new_arr_actual like '%\N%';
   update dbo.rtb2
   set net_new_arr_ly = 0.0
   where net_new_arr_ly like '%\N%';
   
   -- Gross New Arr
   update dbo.rtb2
   set gross_new_arr_target = 0.0
   where gross_new_arr_target like '%\N%';
   update dbo.rtb2
   set gross_new_arr_actual = 0.0
   where gross_new_arr_actual like '%\N%';
   update dbo.rtb2
   set gross_new_arr_ly = 0.0
   where gross_new_arr_ly like '%\N%';

    --Net Cacncellation Arr
   update dbo.rtb2
   set net_cancellations_arr_target = 0.0
   where net_cancellations_arr_target like '%\N%';
   update dbo.rtb2
   set net_cancellations_arr_actual = 0.0
   where net_cancellations_arr_actual like '%\N%';
   update dbo.rtb2
   set net_cancellations_arr_ly = 0.0
   where net_cancellations_arr_ly like '%\N%';

   
   -- Verify Castable to Decimal
   select sum(cast(term_end_renewal_target as real) )
   from dbo.rtb2;
   select sum(cast(term_end_renewal_actual as real) )
   from dbo.rtb2;
   select sum(cast(term_end_renewal_ly as real) )
   from dbo.rtb2;
   select sum(cast(net_new_arr_target as real) )
   from dbo.rtb2;
    select sum(cast(net_new_arr_actual as real) )
   from dbo.rtb2;
    select sum(cast(net_new_arr_ly as real) )
   from dbo.rtb2;
    select sum(cast(gross_new_arr_target as real) )
   from dbo.rtb2;
   select sum(cast(gross_new_arr_actual as real) )
   from dbo.rtb2;
   select sum(cast(gross_new_arr_ly as real) )
   from dbo.rtb2;
   select sum(cast(net_cancellations_arr_target as real) )
   from dbo.rtb2;
   select sum(cast(net_cancellations_arr_actual as real) )
   from dbo.rtb2;
   select sum(cast(net_cancellations_arr_ly as real) )
   from dbo.rtb2;
   
   select
	 term_end_renewal_target         as 'RenewalAtFPTarget',
   net_new_arr_target               as 'NetNewARRTarget', 
   net_cancellations_arr_target      as 'NetCancellationARRTarget', 
   gross_new_arr_target             as 'GrossNewARRTarget',
	net_new_arr_actual               as 'NetNewARRActual',
   net_cancellations_arr_actual     as 'NetCancellationARRActual',  
   gross_new_arr_actual             as 'GrossNewARRActual',
   term_end_renewal_actual         as 'RenewalAtFPActual',
   net_new_arr_ly                 as 'NetNewARRLY',
   gross_new_arr_ly             as 'GrossNewARRLY', 
   net_cancellations_arr_ly         as 'NetCancellationsARRLY',
   term_end_renewal_ly            as 'TermEndRenewalLY'	
from dbo.rtb2 
 where term_end_renewal_target       like '%\N%'
                        or net_new_arr_target           like '%\N%'
                        or net_cancellations_arr_target like '%\N%'
                        or gross_new_arr_target         like '%\N%'
                        or     net_new_arr_actual       like '%\N%'
                        or net_cancellations_arr_actual like '%\N%'
                        or gross_new_arr_actual         like '%\N%'
                        or term_end_renewal_actual      like '%\N%'
                        or net_new_arr_ly               like '%\N%'
                        or gross_new_arr_ly             like '%\N%'
                        or net_cancellations_arr_ly     like '%\N%'
                        or term_end_renewal_ly          like '%\N%'	
