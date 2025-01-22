<?php
/**
 * ParagraphComponentTest
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
use OpenAPI\Client\Model\aplusContent\ParagraphComponent;

/**
 * ParagraphComponentTest Class Doc Comment
 *
 * @category    Class
 * @description A list of rich text content, usually presented in a text box.
 * @package     OpenAPI\Client
 */
class ParagraphComponentTest extends TestCase
{

    private ParagraphComponent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ParagraphComponent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ParagraphComponent"
     */
    public function testParagraphComponent()
    {
        $this->assertInstanceOf(ParagraphComponent::class, $this->model);
    }

    /**
     * Test attribute "text_list"
     */
    public function testPropertyTextList()
    {
        $testValue = [];
        
        $this->model->setTextList($testValue);
        $this->assertEquals($testValue, $this->model->getTextList());
    }
}
