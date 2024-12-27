<?php
/**
 * StandardTextListBlockTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\apluscontent\StandardTextListBlock;

/**
 * StandardTextListBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard fixed length list of text, usually presented as bullet points.
 * @package     OpenAPI\Client
 */
class StandardTextListBlockTest extends TestCase
{

    private StandardTextListBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardTextListBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardTextListBlock"
     */
    public function testStandardTextListBlock()
    {
        $this->assertInstanceOf(StandardTextListBlock::class, $this->model);
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
