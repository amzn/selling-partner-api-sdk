<?php
/**
 * CreateConfirmCustomizationDetailsResponseTest
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
use SpApi\Model\messaging\v1\CreateConfirmCustomizationDetailsResponse;

/**
 * CreateConfirmCustomizationDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the confirmCustomizationDetails operation.
 * @package     SpApi
 */
class CreateConfirmCustomizationDetailsResponseTest extends TestCase
{

    private CreateConfirmCustomizationDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmCustomizationDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmCustomizationDetailsResponse"
     */
    public function testCreateConfirmCustomizationDetailsResponse()
    {
        $this->assertInstanceOf(CreateConfirmCustomizationDetailsResponse::class, $this->model);
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
