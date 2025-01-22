<?php
/**
 * ASINPrepInstructionsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v0\ASINPrepInstructions;

/**
 * ASINPrepInstructionsTest Class Doc Comment
 *
 * @category    Class
 * @description Item preparation instructions to help with item sourcing decisions.
 * @package     OpenAPI\Client
 */
class ASINPrepInstructionsTest extends TestCase
{

    private ASINPrepInstructions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ASINPrepInstructions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ASINPrepInstructions"
     */
    public function testASINPrepInstructions()
    {
        $this->assertInstanceOf(ASINPrepInstructions::class, $this->model);
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\BarcodeInstruction();
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PrepGuidance();
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
}
