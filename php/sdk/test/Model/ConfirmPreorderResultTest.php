<?php
/**
 * ConfirmPreorderResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\ConfirmPreorderResult;

/**
 * ConfirmPreorderResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for confirm preorder operation
 * @package     OpenAPI\Client
 */
class ConfirmPreorderResultTest extends TestCase
{

    private ConfirmPreorderResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmPreorderResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmPreorderResult"
     */
    public function testConfirmPreorderResult()
    {
        $this->assertInstanceOf(ConfirmPreorderResult::class, $this->model);
    }

    /**
     * Test attribute "confirmed_need_by_date"
     */
    public function testPropertyConfirmedNeedByDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setConfirmedNeedByDate($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmedNeedByDate());
    }

    /**
     * Test attribute "confirmed_fulfillable_date"
     */
    public function testPropertyConfirmedFulfillableDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setConfirmedFulfillableDate($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmedFulfillableDate());
    }
}
