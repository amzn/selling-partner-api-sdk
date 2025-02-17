<?php
/**
 * SKUPrepInstructionsTest
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
use SpApi\Model\fulfillment\inbound\v0\SKUPrepInstructions;

/**
 * SKUPrepInstructionsTest Class Doc Comment
 *
 * @category    Class
 * @description Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon&#39;s fulfillment network.
 * @package     SpApi
 */
class SKUPrepInstructionsTest extends TestCase
{

    private SKUPrepInstructions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SKUPrepInstructions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SKUPrepInstructions"
     */
    public function testSKUPrepInstructions()
    {
        $this->assertInstanceOf(SKUPrepInstructions::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "barcode_instruction"
     */
    public function testPropertyBarcodeInstruction()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\BarcodeInstruction();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBarcodeInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getBarcodeInstruction());
    }

    /**
     * Test attribute "prep_guidance"
     */
    public function testPropertyPrepGuidance()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\PrepGuidance();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepGuidance($testValue);
        $this->assertEquals($testValue, $this->model->getPrepGuidance());
    }

    /**
     * Test attribute "prep_instruction_list"
     */
    public function testPropertyPrepInstructionList()
    {
        $testValue = [];
        
        $this->model->setPrepInstructionList($testValue);
        $this->assertEquals($testValue, $this->model->getPrepInstructionList());
    }

    /**
     * Test attribute "amazon_prep_fees_details_list"
     */
    public function testPropertyAmazonPrepFeesDetailsList()
    {
        $testValue = [];
        
        $this->model->setAmazonPrepFeesDetailsList($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonPrepFeesDetailsList());
    }
}
