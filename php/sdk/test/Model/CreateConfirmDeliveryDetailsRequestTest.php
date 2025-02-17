<?php
/**
 * CreateConfirmDeliveryDetailsRequestTest
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
use SpApi\Model\messaging\v1\CreateConfirmDeliveryDetailsRequest;

/**
 * CreateConfirmDeliveryDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createConfirmDeliveryDetails operation.
 * @package     SpApi
 */
class CreateConfirmDeliveryDetailsRequestTest extends TestCase
{

    private CreateConfirmDeliveryDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmDeliveryDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmDeliveryDetailsRequest"
     */
    public function testCreateConfirmDeliveryDetailsRequest()
    {
        $this->assertInstanceOf(CreateConfirmDeliveryDetailsRequest::class, $this->model);
    }

    /**
     * Test attribute "text"
     */
    public function testPropertyText()
    {
        $testValue = 'test';
        
        $this->model->setText($testValue);
        $this->assertEquals($testValue, $this->model->getText());
    }
}
