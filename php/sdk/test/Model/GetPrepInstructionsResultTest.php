<?php
/**
 * GetPrepInstructionsResultTest
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
use SpApi\Model\fulfillment\inbound\v0\GetPrepInstructionsResult;

/**
 * GetPrepInstructionsResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get prep instructions operation
 * @package     SpApi
 */
class GetPrepInstructionsResultTest extends TestCase
{

    private GetPrepInstructionsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPrepInstructionsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPrepInstructionsResult"
     */
    public function testGetPrepInstructionsResult()
    {
        $this->assertInstanceOf(GetPrepInstructionsResult::class, $this->model);
    }

    /**
     * Test attribute "sku_prep_instructions_list"
     */
    public function testPropertySkuPrepInstructionsList()
    {
        $testValue = [];
        
        $this->model->setSkuPrepInstructionsList($testValue);
        $this->assertEquals($testValue, $this->model->getSkuPrepInstructionsList());
    }

    /**
     * Test attribute "invalid_sku_list"
     */
    public function testPropertyInvalidSkuList()
    {
        $testValue = [];
        
        $this->model->setInvalidSkuList($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidSkuList());
    }

    /**
     * Test attribute "asin_prep_instructions_list"
     */
    public function testPropertyAsinPrepInstructionsList()
    {
        $testValue = [];
        
        $this->model->setAsinPrepInstructionsList($testValue);
        $this->assertEquals($testValue, $this->model->getAsinPrepInstructionsList());
    }

    /**
     * Test attribute "invalid_asin_list"
     */
    public function testPropertyInvalidAsinList()
    {
        $testValue = [];
        
        $this->model->setInvalidAsinList($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidAsinList());
    }
}
