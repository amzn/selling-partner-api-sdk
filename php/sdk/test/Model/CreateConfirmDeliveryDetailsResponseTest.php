<?php
/**
 * CreateConfirmDeliveryDetailsResponseTest
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
use SpApi\Model\messaging\v1\CreateConfirmDeliveryDetailsResponse;

/**
 * CreateConfirmDeliveryDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createConfirmDeliveryDetails operation.
 * @package     SpApi
 */
class CreateConfirmDeliveryDetailsResponseTest extends TestCase
{

    private CreateConfirmDeliveryDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmDeliveryDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmDeliveryDetailsResponse"
     */
    public function testCreateConfirmDeliveryDetailsResponse()
    {
        $this->assertInstanceOf(CreateConfirmDeliveryDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
