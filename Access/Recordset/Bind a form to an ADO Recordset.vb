 Private Sub Form_Open(Cancel As Integer) 
 Dim cn As ADODB.Connection 
 Dim rs As ADODB.Recordset 
 
 'Use the ADO connection that Access uses 
 Set cn = CurrentProject.AccessConnection 
 'Create an instance of the ADO Recordset class, 
 'and set its properties 
 Set rs = New ADODB.Recordset 
 With rs 
 Set .ActiveConnection = cn 
 .Source = "SELECT * FROM Customers" 
 .LockType = adLockOptimistic 
 .CursorType = adOpenKeyset 
 .Open 
 End With 
 'Set the form's Recordset property to the ADO recordset 
 Set Me.Recordset = rs 
 Set rs = Nothing 
 Set cn = Nothing 
End Sub