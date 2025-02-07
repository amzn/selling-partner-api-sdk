<?php
/**
 * CreateLegalDisclosureResponseTest
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
use OpenAPI\Client\Model\messaging\v1\CreateLegalDisclosureResponse;

/**
 * CreateLegalDisclosureResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createLegalDisclosure operation.
 * @package     OpenAPI\Client
 */
class CreateLegalDisclosureResponseTest extends TestCase
{

    private CreateLegalDisclosureResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateLegalDisclosureResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateLegalDisclosureResponse"
     */
    public function testCreateLegalDisclosureResponse()
    {
        $this->assertInstanceOf(CreateLegalDisclosureResponse::class, $this->model);
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
