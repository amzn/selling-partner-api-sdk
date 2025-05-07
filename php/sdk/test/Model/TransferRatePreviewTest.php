<?php
/**
 * TransferRatePreviewTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\sellerWallet\v2024_03_01\TransferRatePreview;

/**
 * TransferRatePreviewTest Class Doc Comment
 *
 * @category    Class
 * @description The fees and foreign exchange rates applied to the transaction.  If the fees are in terms of the &#x60;baseAmount&#x60; (source account) currency, then the effective rate is equal to **1 - (fees * &#x60;baseRate&#x60; / &#x60;baseAmount&#x60;)**.  If the fees are in terms of the &#x60;transferAmount&#x60; (destination account) currency, then the effective rate is equal to **&#x60;baseRate&#x60; - (fees / &#x60;baseAmount&#x60;)**.  In the preceding expressions, **fees** is equal to the sum of all &#x60;feeAmount.currencyAmount&#x60; values in the &#x60;fees&#x60; array.
 * @package     SpApi
 */
class TransferRatePreviewTest extends TestCase
{

    private TransferRatePreview $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferRatePreview();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferRatePreview"
     */
    public function testTransferRatePreview()
    {
        $this->assertInstanceOf(TransferRatePreview::class, $this->model);
    }

    /**
     * Test attribute "base_amount"
     */
    public function testPropertyBaseAmount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\Currency();
        
        $this->model->setBaseAmount($testValue);
        $this->assertEquals($testValue, $this->model->getBaseAmount());
    }

    /**
     * Test attribute "fx_rate_details"
     */
    public function testPropertyFxRateDetails()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\FxRateDetails();
        
        $this->model->setFxRateDetails($testValue);
        $this->assertEquals($testValue, $this->model->getFxRateDetails());
    }

    /**
     * Test attribute "transfer_amount"
     */
    public function testPropertyTransferAmount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\Currency();
        
        $this->model->setTransferAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTransferAmount());
    }

    /**
     * Test attribute "fees"
     */
    public function testPropertyFees()
    {
        $testValue = [];
        
        $this->model->setFees($testValue);
        $this->assertEquals($testValue, $this->model->getFees());
    }
}
