# -*- coding: utf-8 -*-
"""
Created on Sat Mar 25 15:29:36 2023

@author: 16692
"""

import pandas as pd
data=pd.read_csv("microeconomic/Foreign direct investment, net inflows - API_BX.KLT.DINV.WD.GD.ZS_DS2_en_csv_v2_5347640.csv")
print(data.values.tolist())
