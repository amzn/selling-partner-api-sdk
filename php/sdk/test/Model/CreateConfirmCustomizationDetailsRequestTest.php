<?php
/**
 * CreateConfirmCustomizationDetailsRequestTest
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
use OpenAPI\Client\Model\messaging\v1\CreateConfirmCustomizationDetailsRequest;

/**
 * CreateConfirmCustomizationDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the confirmCustomizationDetails operation.
 * @package     OpenAPI\Client
 */
class CreateConfirmCustomizationDetailsRequestTest extends TestCase
{

    private CreateConfirmCustomizationDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmCustomizationDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmCustomizationDetailsRequest"
     */
    public function testCreateConfirmCustomizationDetailsRequest()
    {
        $this->assertInstanceOf(CreateConfirmCustomizationDetailsRequest::class, $this->model);
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

    /**
     * Test attribute "attachments"
     */
    public function testPropertyAttachments()
    {
        $testValue = [];
        
        $this->model->setAttachments($testValue);
        $this->assertEquals($testValue, $this->model->getAttachments());
    }
}
