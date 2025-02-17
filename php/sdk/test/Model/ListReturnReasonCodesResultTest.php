<?php
/**
 * ListReturnReasonCodesResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ListReturnReasonCodesResult;

/**
 * ListReturnReasonCodesResultTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the listReturnReasonCodes operation.
 * @package     SpApi
 */
class ListReturnReasonCodesResultTest extends TestCase
{

    private ListReturnReasonCodesResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListReturnReasonCodesResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListReturnReasonCodesResult"
     */
    public function testListReturnReasonCodesResult()
    {
        $this->assertInstanceOf(ListReturnReasonCodesResult::class, $this->model);
    }

    /**
     * Test attribute "reason_code_details"
     */
    public function testPropertyReasonCodeDetails()
    {
        $testValue = [];
        
        $this->model->setReasonCodeDetails($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCodeDetails());
    }
}
